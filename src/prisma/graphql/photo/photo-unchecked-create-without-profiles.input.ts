import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseUncheckedCreateNestedManyWithoutPhotosInput } from '../house/house-unchecked-create-nested-many-without-photos.input';
import { HomeUncheckedCreateNestedManyWithoutPhotosInput } from '../home/home-unchecked-create-nested-many-without-photos.input';
import { CommitteeUncheckedCreateNestedManyWithoutPhotosInput } from '../committee/committee-unchecked-create-nested-many-without-photos.input';
import { ClubUncheckedCreateNestedManyWithoutPhotosInput } from '../club/club-unchecked-create-nested-many-without-photos.input';

@InputType()
export class PhotoUncheckedCreateWithoutProfilesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    alt!: string;

    @Field(() => HouseUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    houses?: HouseUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => HomeUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    homes?: HomeUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => CommitteeUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    committee?: CommitteeUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => ClubUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    clubs?: ClubUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
