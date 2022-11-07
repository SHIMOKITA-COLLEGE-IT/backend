import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedManyWithoutPhotosInput } from '../house/house-create-nested-many-without-photos.input';
import { HomeCreateNestedManyWithoutPhotosInput } from '../home/home-create-nested-many-without-photos.input';
import { CommitteeCreateNestedManyWithoutPhotosInput } from '../committee/committee-create-nested-many-without-photos.input';
import { ClubCreateNestedManyWithoutPhotosInput } from '../club/club-create-nested-many-without-photos.input';

@InputType()
export class PhotoCreateWithoutProfilesInput {

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    alt!: string;

    @Field(() => HouseCreateNestedManyWithoutPhotosInput, {nullable:true})
    houses?: HouseCreateNestedManyWithoutPhotosInput;

    @Field(() => HomeCreateNestedManyWithoutPhotosInput, {nullable:true})
    homes?: HomeCreateNestedManyWithoutPhotosInput;

    @Field(() => CommitteeCreateNestedManyWithoutPhotosInput, {nullable:true})
    committee?: CommitteeCreateNestedManyWithoutPhotosInput;

    @Field(() => ClubCreateNestedManyWithoutPhotosInput, {nullable:true})
    clubs?: ClubCreateNestedManyWithoutPhotosInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
