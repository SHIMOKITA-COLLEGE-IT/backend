import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateNestedManyWithoutHousesInput } from '../photo/photo-create-nested-many-without-houses.input';

@InputType()
export class HouseCreateWithoutShimokitaCollegeProfilesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => PhotoCreateNestedManyWithoutHousesInput, {nullable:true})
    photos?: PhotoCreateNestedManyWithoutHousesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
