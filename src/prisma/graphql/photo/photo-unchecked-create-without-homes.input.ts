import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutPhotosInput } from '../profile/profile-unchecked-create-nested-many-without-photos.input';
import { HouseUncheckedCreateNestedManyWithoutPhotosInput } from '../house/house-unchecked-create-nested-many-without-photos.input';
import { CommitteeUncheckedCreateNestedManyWithoutPhotosInput } from '../committee/committee-unchecked-create-nested-many-without-photos.input';
import { ClubUncheckedCreateNestedManyWithoutPhotosInput } from '../club/club-unchecked-create-nested-many-without-photos.input';

@InputType()
export class PhotoUncheckedCreateWithoutHomesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    alt!: string;

    @Field(() => ProfileUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    profiles?: ProfileUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => HouseUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    houses?: HouseUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => CommitteeUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    committee?: CommitteeUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => ClubUncheckedCreateNestedManyWithoutPhotosInput, {nullable:true})
    clubs?: ClubUncheckedCreateNestedManyWithoutPhotosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
